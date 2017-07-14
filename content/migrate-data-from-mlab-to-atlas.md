+++
title = "Migrate an mlab MongoDB Cluster to Atlas"

tags = [
"mongodb-atlas",
"administration",
"migration",
"intermediate" ]
+++

# Migrate an mlab MongoDB Cluster to Atlas

[MongoDB Atlas](https://cloud.mongodb.com/?jmp=docs) is a cloud service for
running, monitoring, and maintaining MongODB Deployments, including the
provisioning of dedicated servers for the MongoDB instances.

This procedure migrates a MongoDB cluster hosted on mLab to an Atlas cluster using
the Atlas [Live Migration](https://docs.atlas.mongodb.com/import/live-import/) 
tool.

This procedure requires downtime limited to the amount of time required to
update your applications to connect to the Atlas cluster.

**Important**: This procedure only applies to Dedicated mLab clusters. The
Sandbox and Shared mLab environments cannot be migrated via the Live Migration
tool due to missing command capabilities.

<span id="configure-compose-cluster"></span>

## Configure the Source mLab Cluster for Migration

Log into your mLab account and click on the MongoDB cluster you want to
migrate. Keep this page open, as you will need the information presented on it
for use with this procedure.

<span id="configure-compose-cluster-admin-user"></span>

### Create an administrative user for Migration

To create an administrative user:

1. Select the source MongoDB cluster in the mLab user interface.
2. From the ``Databases`` view, click the ``admin`` database.
3. Click ``Users``.
4. Click ``Add admin user``. Take note of the username and password you assign. **Do not check the ``Make read-only`` box**.
5. Click ``Create`` to create the user.

<span id="configure-atlas-cluster-whitelist"></span>

### Whitelist the Atlas migration servers

1. From the cluster view, click ``Networking``.
2. Click ``Add IP address range rule(s)``. 
3. Add the following IP addresses:
   
   - ``4.35.16.128/25``
   - ``4.71.186.128/25``
4. Click ``Apply security changes``. When prompted, click ``Yes`` to confirm.

<span id="configure-atlas-cluster"></span>

## Configure the destination Atlas cluster for migration

Log into your Atlas account and click ``Clusters`` in the left-hand navigation
panel. Ensure you are in your preferred Atlas group by checking the 
``Group`` dropdown in the top-left corner of the Atlas UI.

If you have not yet created an Atlas cluster as the destination for the
migration procedure, 
[create one now](https://docs.atlas.mongodb.com/create-new-cluster/).

When selecting a destination cluster, consider the following:
  
- The live migration process may not be able to keep up with a source cluster 
  whose write workload is greater than what can be transferred and applied to
  the destination cluster. You may need to scale the destination cluster up to
  a instance with more processing power, bandwidth or disk IO.
  
- The destination Atlas cluster must be a replica set. You can [scale the cluster](https://docs.atlas.mongodb.com/scale-cluster/)
  to a sharded cluster after migration. 

- You cannot select an M0 (Free Tier) cluster as the destination for live migration.

**Important**: If possible, ensure the destination cluster is empty. If the
destination cluster already contains data, ensure that the source and
destination clusters do not share any namespaces, excluding those on the
``admin`` and ``local`` database. A namespace is the full path to a collection
in ``<database>.<collection>`` format. For example, if both the source and
destination have the ``foo.bar`` namespace, migration will fail.

### Configure MongoDB users

The Atlas Live Migration tool *does not* migrate user and role data. You must
[configure the necessary MongoDB users](https://docs.atlas.mongodb.com/security-add-mongodb-users/),
such that your applications have the same level of data and operational access as provided
on the mLab cluster. 

### Whitelist applications that must connect to the cluster

Atlas defaults to blocking all incoming connections not on the IP whitelist.
The Live Migration tool automatically adds a temporary whitelist entry for the
source mLab cluster. 
You must [whitelist any other applications or services](https://docs.atlas.mongodb.com/security-whitelist/) 
that need to connect to the Atlas cluster.

### (AWS Only) Configure VPC Peering

For Atlas clusters deployed on Amazon Web Services, you can [configure
VPC Peering Connections](https://docs.atlas.mongodb.com/security-vpc-peering/) 
between your Atlas cluster and any AWS VPCs in the same AWS region.

## Migrate a mLab cluster to Atlas

**Important**: The Live Migration tool requires a period of downtime where you
cut over your applications to the Atlas cluster. Atlas provides a 
72-hour extendable cutover period during which you can schedule the downtime.

Before proceeding, ensure you have [configured the mLab source cluster](#configure-compose-cluster)
and [configured the Atlas destination cluster](#configure-atlas-cluster).

### Step 1: Open the Live Migration Configuration Dialog

In the Altas UI, from ``Clusters`` view click the ``...`` button for the
destination cluster and select ``Migrate Data To This Cluster``.

Atlas provides a summary of the Live Migration procedure. Once you have
read through it, click ``I'm Ready To Migrate`` to open the configuration
dialog.

### Step 2: Enter the source cluster connection information

The Live Migration configuration dialog requires the following information 
from the mLab cluster view:

- Hostname and Port of the primary replica set member in the mLab cluster.
- Username for administrative user created in an [earlier step](#configure-compose-cluster-admin-user).
- Password for the administrative user created in an [earlier step](#configure-compose-cluster-admin-user).

The mLab cluster view displays the hostname and port of the primary replica set member
as a part of the ``mongo`` shell connection dialog. The following example
shows an annotation of the shell command:

```shell

mongo example.mlab.com:59622/<database> -u <dbuser> -p <dbpassword>
      \  hostname : port   /

```

The primary hostname and port is ``example.mlab.com:59622``.

Copy the hostname, username, and password into the Live Migration configuration dialog.

If your mLab cluster requires SSL for connectivity, you must retrieve the 
mLab's root certificate. [Follow mLab's documentation](http://docs.mlab.com/ssl-db-connections/#downloading-and-using-mlabs-root-certificate)
to retrieve the SSL certificate text. In general, you must:

1. Download the root mLab certificate.
2. mLab provides the root certificate in the DER binary format. You must conver this to a PEM ASCII-based format.

   The following example uses ``openssl`` to convert the root mLab certificate to PEM:
   
   ```shell
   
   openssl x509 -inform der -in <path-to-DER-certificate> -out <path-to-PEM-certificate>
   
   ```
   
3. Copy the *entire* certificate, including the ``BEGIN CERTIFICATE`` and
   ``END CERTIFICATE`` lines.
4. In the Atlas Live Migration configuration dialog, 
5. Paste the *entire* the certificate into the Atlas Live Migration
   configuration dialog.

### Step 3: Validate the Live Migration settings

Click ``Validate`` to prompt Atlas to confirm it can successfully connect to the
mLab cluster. If the connection fails to validate, ensure you have
entered all information correctly *and* that you have 
[configured the mLab cluster whitelist](configure-atlas-cluster-whitelist).

If errors persist, open a support ticket in Atlas UI by clicking
``Support`` in the left-hand navigation and filling out the requested information.

### Step 4: Begin the Live Migration procedure

Once your connection is validated, click ``Start Migration``. Atlas begins
the migration procedure and displays a counter in the UI that represents
the time remaining for the Atlas cluster to catch up to the mLab cluster.

When the timer turns green, the ``Start Cut Over`` button. Atlas displays
a walk-through with instructions on how to proceed with the cut over. In general,
you must:

- Stop all applications from reading or writing to the mLab cluster.
- Wait for the timer to hit ``0:00``. 
- Update applications with the Atlas cluster connection URI as displayed in Atlas.
- Update applications to use Atlas MongoDB users, such that they retain the same level of data and operational access.
- Restart your applications and confirm they are reading from and writing to the Atlas cluster.

Once your applications are up, you can confirm they have connected successfully to
the Atlas cluster and are writing normally. When you have validated that your
applications are working as expected, you can click ``I'm done`` to complete the
migration procedure and stop reading data from the mLab cluster. 