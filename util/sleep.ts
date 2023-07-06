const sleep = (ms: number) => new Promise(resolve => setTimeout(() => resolve(void 0), ms));
export default sleep;