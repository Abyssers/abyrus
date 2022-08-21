/*eslint no-undef: "off"*/
/*eslint no-useless-escape: "off"*/
const logger = require("hexo-log")();

logger.info(`
   _____ ___.                               
  /  _  \\_ |__ ___.__._______ __ __  ______
 /  /_\  \| __ <   |  |\_  __ \  |  \/  ___/
/    |    \ \_\ \___  | |  | \/  |  /\___ \ 
\____|__  /___  / ____| |__|  |____//____  >
        \/    \/\/                       \/
`);

require("../include/dependency")(hexo);
require("../include/config")(hexo);
require("../include/register")(hexo);
