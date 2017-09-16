var gulp = require('gulp');

__workDir = __dirname;
__devTool = 'eval';
__host = "127.0.0.1";

__port = 8081;
__maxAssetSize = 1000;

__alias = {
    "assets":__workDir + "/src/common/assets/",
    "src":__workDir + "/src/"
};
require('@fabalous/runtime-web/config/gulp/RuntimeWeb.config')(gulp);
require('@fabalous/runtime-node/config/gulp/RuntimeNode.config')(gulp);