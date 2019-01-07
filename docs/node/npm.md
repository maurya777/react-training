# NPM

Node Package Manager is the most popular package management tool for Node.js projects. There have been others in past like Bower, but NPM is most favorite of them. It is installed by default with all the Node.js installations.

Any package management utility does two important things, it hosts all the available packages and provides a tool for publishing, installing, upgrading and deleting these packages as dependencies.

NPM is no different, here are the most common uses of NPM:

```bash
# Initialize a new NPM project
>npm init

# installation/update
>npm install [<package>][@<version>]

# removal
>npm uninstall <package>

# global flag
>npm install -g <package>
>npm uninstall -g <package>
```

## Package.json

Every NPM project when initialized creates a file at the root of the project called package.json. This file serves the following main purposes:

* Meta information like name, version, author, licence etc.
* List of Dependencies and their versions.
* Scripts, command shortcuts that we can execute using NPM.

It has two lists of dependencies, normal dependencies and dev dependencies. Dev dependencies are not supposed to be shipped to production and are only used for development and build purposes.

## Registry

There is common repository of NPM packages that everyone in the world uses. You can run the following command to see where it is:

```bash
>npm get registry
```

We can host our own registry server used only by a team or a company and switch to new registry using the following command:

```bash
>npm set registry http://my-new-registry.com
```

## Scripts

We can run the command setup in the scripts list in package.json using the following command:

```bash
>npm run <script>
# e.g. npm run build
```

[NPM official site](https://www.npmjs.com/)  
[NPM Packages and Modules](https://docs.npmjs.com/packages-and-modules/)  
[NPM CLI Documentation](https://docs.npmjs.com/cli-documentation/)