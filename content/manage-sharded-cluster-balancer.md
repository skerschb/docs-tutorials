+++
title = "Manage Sharded Cluster Balancer"

[tags]
+++
# Manage Sharded Cluster Balancer


# On this page

* [Check the Balancer State](#check-the-balancer-state) 

* [Check if Balancer is Running](#check-if-balancer-is-running) 

* [Configure Default Chunk Size](#configure-default-chunk-size) 

* [Schedule the Balancing Window](#schedule-the-balancing-window) 

* [Remove a Balancing Window Schedule](#remove-a-balancing-window-schedule) 

* [Disable the Balancer](#disable-the-balancer) 

* [Enable the Balancer](#enable-the-balancer) 

* [Disable Balancing During Backups](#disable-balancing-during-backups) 

* [Disable Balancing on a Collection](#disable-balancing-on-a-collection) 

* [Enable Balancing on a Collection](#enable-balancing-on-a-collection) 

* [Confirm Balancing is Enabled or Disabled](#confirm-balancing-is-enabled-or-disabled) 

* [Change Replication Behavior for Chunk Migration](#change-replication-behavior-for-chunk-migration) 

* [Change the Maximum Storage Size for a Given Shard](#change-the-maximum-storage-size-for-a-given-shard) 

Changed in version 3.4: The balancer process has moved from the [``mongos``](#bin.mongos) instances
to the primary member of the config server replica set.

This page describes common administrative procedures related
to balancing. For an introduction to balancing, see
[Sharded Cluster Balancer](#sharding-balancing). For lower level information on balancing, see
[Cluster Balancer](#sharding-balancing-internals).

Important: Use the version of the [``mongo``](#bin.mongo) shell that corresponds to the version of the sharded cluster. For example, do not use a 3.2 or earlier version of [``mongo``](#bin.mongo) shell against the 3.4 sharded cluster. 


## Check the Balancer State

[``sh.getBalancerState()``](#sh.getBalancerState) checks if the balancer is enabled (i.e. that the
balancer is permitted to run). [``sh.getBalancerState()``](#sh.getBalancerState) does not check if the balancer
is actively balancing chunks.

To see if the balancer is enabled in your [*sharded cluster*](#term-sharded-cluster),
issue the following command, which returns a boolean:

```javascript

sh.getBalancerState()

```

New in version 3.0.0: You can also see if the balancer is enabled using
[``sh.status()``](#sh.status). The
[``currently-enabled``](#sh.status.balancer.currently-enabled) field indicates whether
the balancer is enabled, while the
[``currently-running``](#sh.status.balancer.currently-running) field indicates if
the balancer is currently running.


## Check if Balancer is Running

To see if the balancer process is active in your [*cluster*](#term-sharded-cluster):

Important: Use the version of the [``mongo``](#bin.mongo) shell that corresponds to the version of the sharded cluster. For example, do not use a 3.2 or earlier version of [``mongo``](#bin.mongo) shell against the 3.4 sharded cluster. 

1. Connect to any [``mongos``](#bin.mongos) in the cluster using the [``mongo``](#bin.mongo) shell. 

2. Use the following operation to determine if the balancer is running: 

   ```javascript

   sh.isBalancerRunning()

   ```


## Configure Default Chunk Size

The default chunk size for a sharded cluster is 64 megabytes. In most
situations, the default size is appropriate for splitting and migrating
chunks. For information on how chunk size affects deployments, see
details, see [Chunk Size](#sharding-chunk-size).

Changing the default chunk size affects chunks that are processes during
migrations and auto-splits but does not retroactively affect all chunks.

To configure default chunk size, see
[Modify Chunk Size in a Sharded Cluster](#).


## Schedule the Balancing Window

In some situations, particularly when your data set grows slowly and a
migration can impact performance, it is useful to ensure
that the balancer is active only at certain times. The following
procedure specifies the ``activeWindow``,
which is the timeframe during which the [*balancer*](#term-balancer) will
be able to migrate chunks:


### Step 1: Connect to [``mongos``](#bin.mongos) using the [``mongo``](#bin.mongo) shell.

You can connect to any [``mongos``](#bin.mongos) in the cluster.


### Step 2: Switch to the [Config Database](#config-database).

Issue the following command to switch to the config database.

```sh

use config

```


### Step 3: Ensure that the balancer is not ``stopped``.

The balancer will not activate in the ``stopped`` state.
To ensure that the  balancer
is not ``stopped``, use [``sh.setBalancerState()``](#sh.setBalancerState),
as in the following:

```sh

sh.setBalancerState( true )

```

The balancer will not start if you are outside
of the ``activeWindow`` timeframe.


### Step 4: Modify the balancer's window.

Set the ``activeWindow`` using [``update()``](#db.collection.update),
as in the following:

```sh

db.settings.update(
   { _id: "balancer" },
   { $set: { activeWindow : { start : "<start-time>", stop : "<stop-time>" } } },
   { upsert: true }
)

```

Replace ``<start-time>`` and ``<end-time>`` with time values using
two digit hour and minute values (i.e. ``HH:MM``) that specify the
beginning and end boundaries of the balancing window.

* For ``HH`` values, use hour values ranging from ``00`` - ``23``. 

* For ``MM`` value, use minute values ranging from ``00`` - ``59``. 

MongoDB evaluates the start and stop times relative to the time
zone of the member which is serving as a primary in the config
server replica set.

Note: The balancer window must be sufficient to *complete* the migration of all data inserted during the day.As data insert rates can change based on activity and usage patterns, it is important to ensure that the balancing window you select will be sufficient to support the needs of your deployment.Do not use the [``sh.startBalancer()``](#sh.startBalancer) method when you have set an ``activeWindow``. 


## Remove a Balancing Window Schedule

If you have [set the balancing window](#sharding-schedule-balancing-window) and wish to remove the schedule
so that the balancer is always running, use [``$unset``](#up._S_unset) to clear
the ``activeWindow``, as in the following:

```javascript

use config
db.settings.update({ _id : "balancer" }, { $unset : { activeWindow : true } })

```


## Disable the Balancer

By default, the balancer may run at any time and only moves chunks as
needed. To disable the balancer for a short period of time and prevent
all migration, use the following procedure:

1. Connect to any [``mongos``](#bin.mongos) in the cluster using the [``mongo``](#bin.mongo) shell. 

2. Issue the following operation to disable the balancer: 

   ```javascript

   sh.stopBalancer()

   ```

   If a migration is in progress, the system will complete the
   in-progress migration before stopping.

3. To verify that the balancer will not start, issue the following command, which returns ``false`` if the balancer is disabled: 

   ```javascript

   sh.getBalancerState()

   ```

   Optionally, to verify no migrations are in progress after disabling,
   issue the following operation in the [``mongo``](#bin.mongo) shell:

   ```javascript

   use config
   while( sh.isBalancerRunning() ) {
             print("waiting...");
             sleep(1000);
   }

   ```

Note: To disable the balancer from a driver that does not have the [``sh.stopBalancer()``](#sh.stopBalancer) or [``sh.setBalancerState()``](#sh.setBalancerState) helpers, issue the following command from the ``config`` database:```javascript 

  db.settings.update( { _id: "balancer" }, { $set : { stopped: true } } ,  { upsert: true } )

  ```


## Enable the Balancer

Use this procedure if you have disabled the balancer and are ready to
re-enable it:

1. Connect to any [``mongos``](#bin.mongos) in the cluster using the [``mongo``](#bin.mongo) shell. 

2. Issue one of the following operations to enable the balancer: 

   From the [``mongo``](#bin.mongo) shell, issue:

   ```javascript

   sh.setBalancerState(true)

   ```

   From a driver that does not have the [``sh.startBalancer()``](#sh.startBalancer) helper,
   issue the following from the ``config`` database:

   ```javascript

   db.settings.update( { _id: "balancer" }, { $set : { stopped: false } } , { upsert: true } )

   ```


## Disable Balancing During Backups

If MongoDB migrates a [*chunk*](#term-chunk) during a [backup](#), you can end with an inconsistent snapshot
of your [*sharded cluster*](#term-sharded-cluster). Never run a backup while the balancer is
active. To ensure that the balancer is inactive during your backup
operation:

* Set the [balancing window](#sharding-schedule-balancing-window) so that the balancer is inactive during the backup. Ensure that the backup can complete while you have the balancer disabled. 

* [manually disable the balancer](#sharding-balancing-disable-temporarily) for the duration of the backup procedure. 

If you turn the balancer off while it is in the middle of a balancing round,
the shut down is not instantaneous. The balancer completes the chunk
move in-progress and then ceases all further balancing rounds.

Before starting a backup operation, confirm that the balancer is not
active. You can use the following command to determine if the balancer
is active:

```javascript

!sh.getBalancerState() && !sh.isBalancerRunning()

```

When the backup procedure is complete you can reactivate
the balancer process.


## Disable Balancing on a Collection

You can disable balancing for a specific collection with the
[``sh.disableBalancing()``](#sh.disableBalancing) method. You may want to disable the
balancer for a specific collection to support maintenance operations or
atypical workloads, for example, during data ingestions or data exports.

When you disable balancing on a collection, MongoDB will not interrupt in
progress migrations.

To disable balancing on a collection, connect to a [``mongos``](#bin.mongos)
with the [``mongo``](#bin.mongo) shell and call the
[``sh.disableBalancing()``](#sh.disableBalancing) method.

For example:

```javascript

sh.disableBalancing("students.grades")

```

The [``sh.disableBalancing()``](#sh.disableBalancing) method accepts as its parameter the
full [*namespace*](#term-namespace) of the collection.


## Enable Balancing on a Collection

You can enable balancing for a specific collection with the
[``sh.enableBalancing()``](#sh.enableBalancing) method.

When you enable balancing for a collection, MongoDB will not *immediately*
begin balancing data. However, if the data in your sharded collection is
not balanced, MongoDB will be able to begin distributing the data more
evenly.

To enable balancing on a collection, connect to a [``mongos``](#bin.mongos)
with the [``mongo``](#bin.mongo) shell and call the
[``sh.enableBalancing()``](#sh.enableBalancing) method.

For example:

```javascript

sh.enableBalancing("students.grades")

```

The [``sh.enableBalancing()``](#sh.enableBalancing) method accepts as its parameter the
full [*namespace*](#term-namespace) of the collection.


## Confirm Balancing is Enabled or Disabled

To confirm whether balancing for a collection is enabled or disabled,
query the ``collections`` collection in the ``config`` database for the
collection [*namespace*](#term-namespace) and check the ``noBalance`` field. For
example:

```javascript

db.getSiblingDB("config").collections.findOne({_id : "students.grades"}).noBalance;

```

This operation will return a null error, ``true``, ``false``, or no output:

* A null error indicates the collection namespace is incorrect. 

* If the result is ``true``, balancing is disabled. 

* If the result is ``false``, balancing is enabled currently but has been disabled in the past for the collection. Balancing of this collection will begin the next time the balancer runs. 

* If the operation returns no output, balancing is enabled currently and has never been disabled in the past for this collection. Balancing of this collection will begin the next time the balancer runs. 

New in version 3.0.0: You can also see if the balancer is enabled using
[``sh.status()``](#sh.status). The
[``currently-enabled``](#sh.status.balancer.currently-enabled) field indicates if the
balancer is enabled.


## Change Replication Behavior for Chunk Migration


### Secondary Throttle

During chunk migration (initiated either automatically via the balancer
or manually via [``moveChunk``](#dbcmd.moveChunk) command), the
``_secondaryThrottle`` value determines when the balancer proceeds with
the next document in the chunk:

* If ``true``, each document move during chunk migration propagates to at least one secondary before the balancer proceeds with the next document. This is equivalent to a write concern of [``{ w: 2 }``](#writeconcern.<number>). 

  Note: The ``writeConcern`` field in the balancer configuration document allows you to specify a different [write concern](#) semantics with the ``_secondaryThrottle`` option. 

* If ``false``, the balancer does not wait for replication to a secondary and instead continues with the next document. 

Starting in MongoDB 3.4, for [WiredTiger](#storage-wiredtiger),
the default value ``_secondaryThrottle`` is ``false`` for all chunk
migrations.

The default value remains ``true`` for [MMAPv1](#storage-mmapv1).

To change the balancer's ``_secondaryThrottle`` and ``writeConcern``
values, connect to a [``mongos``](#bin.mongos) instance and directly update
the ``_secondaryThrottle`` value in the [``settings``](#config.settings)
collection of the [config database](#config-database). For
example, from a [``mongo``](#bin.mongo) shell connected to a
[``mongos``](#bin.mongos), issue the following command:

```javascript

use config
db.settings.update(
   { "_id" : "balancer" },
   { $set : { "_secondaryThrottle" : true ,
              "writeConcern": { "w": "majority" } } },
   { upsert : true }
)

```

The effects of changing the ``_secondaryThrottle`` and
``writeConcern`` value may not be
immediate. To ensure an immediate effect, stop and restart the balancer
to enable the selected value of ``_secondaryThrottle``. See
[Manage Sharded Cluster Balancer](#) for details.

For more information on the replication behavior during various steps
of chunk migration, see [Chunk Migration and Replication](#chunk-migration-replication).


### Wait for Delete

The ``_waitForDelete`` setting of the balancer and the
[``moveChunk``](#dbcmd.moveChunk) command affects how the balancer migrates
multiple chunks from a shard. By default, the balancer does not wait
for the on-going migration's delete phase to complete before starting
the next chunk migration. To have the delete phase **block** the start
of the next chunk migration, you can set the ``_waitForDelete`` to
true.

For details on chunk migration, see [Chunk Migration](#sharding-chunk-migration).
For details on the chunk migration queuing behavior, see
[Asynchronous Chunk Migration Cleanup](#chunk-migration-queuing).

The ``_waitForDelete`` is generally for internal testing purposes. To
change the balancer's ``_waitForDelete`` value:

1. Connect to a [``mongos``](#bin.mongos) instance. 

2. Update the ``_waitForDelete`` value in the [``settings``](#config.settings) collection of the [config database](#config-database). For example: 

   ```javascript

   use config
   db.settings.update(
      { "_id" : "balancer" },
      { $set : { "_waitForDelete" : true } },
      { upsert : true }
   )

   ```

Once set to ``true``, to revert to the default behavior:

1. Connect to a [``mongos``](#bin.mongos) instance. 

2. Update or unset the ``_waitForDelete`` field in the [``settings``](#config.settings) collection of the [config database](#config-database): 

   ```javascript

   use config
   db.settings.update(
      { "_id" : "balancer", "_waitForDelete": true },
      { $unset : { "_waitForDelete" : "" } }
   )

   ```


## Change the Maximum Storage Size for a Given Shard

By default shards have no constraints in storage size. However, you can set a
maximum storage size for a given shard in the sharded cluster. When
selecting potential destination shards, the balancer ignores shards
where a migration would exceed the configured maximum storage size.

The [``shards``](#config.shards) collection in the [config
database](#config-database) stores configuration data related to shards.

```javascript

{ "_id" : "shard0000", "host" : "shard1.example.com:27100" }
{ "_id" : "shard0001", "host" : "shard2.example.com:27200" }

```

To limit the storage size for a given shard, use the
[``db.collection.updateOne()``](#db.collection.updateOne) method with the [``$set``](#up._S_set) operator to
create the ``maxSize`` field and assign it an ``integer`` value. The
``maxSize`` field represents the maximum storage size for the shard in
``megabytes``.

The following operation sets a maximum size on a shard of ``1024 megabytes``:

```javascript

config = db.getSiblingDB("config")
config.shards.updateOne( { "_id" : "<shard>"}, { $set : { "maxSize" : 1024 } } )

```

This value includes the mapped size of *all* data files on the
shard, including the ``local`` and ``admin`` databases.

By default, ``maxSize`` is not specified, allowing shards to consume the
total amount of available space on their machines if necessary.

You can also set ``maxSize`` when adding a shard.

To set ``maxSize`` when adding a shard, set the [``addShard``](#dbcmd.addShard)
command's ``maxSize`` parameter to the maximum size in ``megabytes``. The
following command run in the [``mongo``](#bin.mongo) shell adds a shard with a
maximum size of 125 megabytes:

```javascript

config = db.getSiblingDB("config")
config.runCommand( { addshard : "example.net:34008", maxSize : 125 } )

```