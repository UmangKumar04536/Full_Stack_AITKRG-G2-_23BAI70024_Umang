import logs from "./logs";

const hcarbon = logs.filter(log=> log.carbon >=4);
export default hcarbon;