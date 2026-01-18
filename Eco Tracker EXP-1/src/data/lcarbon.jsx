import logs from "./logs";

const hcarbon = logs.filter(log=> log.carbon <=3);
export default hcarbon;