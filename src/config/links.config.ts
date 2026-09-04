export const linksConfig = {
  a: '',

  get isProduction() {
    return process.env.NODE_ENV === 'production';
  }
};