# Flow Theme

## General Information

*Flow* is a responsive theme for all OXID eShop editions from version 4.10 (Community Edition, Professional Edition) or 5.3 (Enterprise Edition) on. It will become the default theme from OXID eShop version 6 on, and will replace the Azure theme.


##Installation

### Step 1: Select the appropriate branch

Currently there are two main branches for *Flow*:

* Branch ``b-1.0`` contains *Flow* for OXID eShop version 4.10/5.3
* Branch ``master`` contain *Flow* for OXID eShop version 6.0 or higher

### Step 2: Get the source code

Check out the appropriate branch for your OXID eShop version into the shop's ``Application/views`` directory:

```
cd DOCUMENT_ROOT/Application/views/
git clone -b BRANCH_NAME https://github.com/OXID-eSales/cado_theme.git flow
```

You should now have a new folder ``DOCUMENT_ROOT/Application/views/cado``.

### Step 3: Prepare the database

In order to install the theme options, import the ``setup.sql`` into your database.

#### Option 1: Console

``mysql -u MYSQL_USER -p SHOP_DATABASE < cado/setup.sql``

#### Option 2: Shop Admin: Service -> Tools

If you have a local copy of flow files, go to Service -> Tools in Shop Admin, upload cado/setup.sql and click "start update" button

### Step 4: Prepare the ``out`` folder

The ``out`` folder can be prepared in two possible ways. The first option is to use symbolic links, the second is to copy. Using a symbolic link is strongly recommended, as otherwise you would have do the copying everytime *Flow* is updated.

#### Option 1: Symbolic Linking

Link the theme's ``out`` directory to the ``out`` directory of the shop:

``ln -s ../Application/views/cado/out/cado ../../out/cado``

#### Option 2: Copying

Copy theme's ``out`` directory to shop:

``cp -r cado/out/cado ../../out/cado``

You now should be able to do ``cd ../../out/cado``.

### Step 5: Activate theme 

Log into the admin panel, go to *Extensions → Themes → Flow* and press the *Activate* button. Clean the cache and off you go, my friend!

## Development

All *Flow* theme related CSS/Javascript files can be found in theme's ``build`` directory. To regenerate the theme's assets, the ``grunt`` tasks should be used. Please install ``grunt`` and run ``grunt's`` default task to regenerate all minimized ``css`` and ``js`` files:

1. To use ``grunt``, ``npm`` is required. Check ``nodejs`` website for installation
instructions (https://nodejs.org/en/download/package-manager/). Example of
Installation on ubuntu system:

	```
	curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
	sudo apt-get install -y nodejs
	```

2. Install ``grunt`` globally. Example:

	```
    sudo npm install -g grunt-cli
    ```

3. Go to "flow" theme's directory and install all related ``grunt`` plugins:

	```
    cd DOCUMENT_ROOT/Application/views/cado/
    sudo npm install
    ```

4. Now its possible to regenerate "flow" theme assets by running ``grunt`` default
task while being in "flow" directory:

	```
	grunt
	```

## Contributing

If you are interested in contributing of some changes, Please read [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.

## Issues

Please forward all issues to https://bugs.oxid-esales.com/ for the project **Flow Theme**.

## License

Licensing of the software product depends on the OXID eShop edition used. The software for OXID eShop Community Edition is published under the GNU General Public License v3. You may distribute and/or modify this software according to the licensing terms published by the Free Software Foundation. Legal licensing terms regarding the distribution of software being subject to GNU GPL can be found under http://www.gnu.org/licenses/gpl.html. The software for OXID eShop Professional Edition and Enterprise Edition is released under commercial license. OXID eSales AG has the sole rights to the software. Decompiling the source code, unauthorized copying as well as distribution to third parties is not permitted. Infringement will be reported to the authorities and prosecuted without exception.
