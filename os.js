const os = require('os');
const info = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  uptime: os.uptime(),
};

console.log(info);
