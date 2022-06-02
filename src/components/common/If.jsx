const If = ({ condition, otherwise, children }) => condition ? (children) : (otherwise);
export default If;