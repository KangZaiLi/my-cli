#!/usr/bin/env node
const { program } = require("commander");
const version = require("./package.json").version;
program.version(version, "-v, --version"); // 设置版本号命令

program
  .command("create <app-name>")
  .description("使用 my-cli 创建一个新的项目")
  .action((name, command) => {
    const create = require("./lib/create");
    create(name);
  });

program.parse(process.argv);
