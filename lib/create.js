const path = require("path");
const mkdirp = require("mkdirp");
const chalk = require("chalk");
const ora = require("ora");
const download = require("download-git-repo");

module.exports = (name) => {
  const cwd = process.cwd(); // 当前目录
  const targetDir = path.join(cwd, name); // 生成项目的目录
  const oProgress = ora(chalk.blue("正在下载..."));

  try {
    console.log(chalk.green(`✔ 创建目录: ${name}`));
    mkdirp(targetDir);
    oProgress.start();
    download(
      "direct:https://github.com/KangZaiLi/my-vue-template.git",
      name,
      { clone: true },
      (err) => {
        if (err) {
          oProgress.fail(chalk.red(`下载失败`));
        } else {
          oProgress.succeed(chalk.green(`下载完成`));
          console.log(chalk.green(`✔ 创建项目: ${name}`));
        }
      }
    );
  } catch (err) {
    console.log(chalk.red(`创建 ${name} 失败`));
  }
};
