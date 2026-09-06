const message: string = encodeURIComponent('Здравствуйте, с сайта. Интересуюсь ...');

export const linksConfig = {
  whatsapp: `https://wa.me/79771754050?text=${message}`,
  telegram: `https://t.me/unl1337?text=${message}`,
  phone: 'tel:+79771754050',
  avitoReviews: 'https://www.avito.ru/brands/i276031516/all?sellerId=32941a317117e465d0fff3afcdbe74ba',

  get isProduction() {
    return process.env.NODE_ENV === 'production';
  }
};