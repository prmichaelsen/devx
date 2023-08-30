### What is this package?
This is a repository of command line utilities written in
`typescript` for use with `ts-node`.

### How do I run it?
The preferred way to run scripts with the 
`ts-node` version specified in the `package.json`.
To do so, use the provided `devx` bash script.
`devx` bash script. 

For example:
```
./devx ls-scripts.ts src
```

### Use devx command globally
> Note: Only supports `unix`-like shells like MacOS
and Linux distributions. Does not work
on Windows.

You only need to update your `.bashrc`,
`.bash_profile`, or `.zshrc`.

To do so, run `./init` and follow the 
instructions provided.

This will also add bash completion 
for your scripts.