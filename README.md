# use strict

Node v0.10 marks a *signficant* milestone. NodeJS is now 100% es5 compliant.
All of the core modules will run in es5 strict mode.

Unfortunately, however, you have to pass the `--use_strict` argument to node
on the commandline in order to enforce compliance.

I created a shim so that you can shebang-run your apps
(since you can't pass arguments to shebang'd commands)

## Install

    npm install -g node-es5

## Usage

    #!/usr/bin/env node-es5

## Hiccups

There are still a lot of modules out there that are not es5 compliant,
but most of the errors are simple typos with which the code still "worked" before.

Please help the community by forking and fixing as you run into trouble!

## Why this shim?

To be abundantly clear, **this won't work:**

    #!/usr/bin/env node --use_strict

## ES5 has been around for a loooong time, so why now?

Octals. You can't use literal octals in es5 strict (it's an ambiguous syntax and hence removed),
but a lot of the core node devs wanted to continue to use them.

Other than that... no idea.
