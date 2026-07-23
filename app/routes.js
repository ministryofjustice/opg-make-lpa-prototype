//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/redirect', (req, res) => {
  const referer = req.header('referer');

  const redirect = req.session.data['redirect'];
  req.session.data['redirect'] = null;

  if (redirect) {
    const parts = referer.split('/');
    parts.pop();
    parts.push(redirect);

    res.redirect(parts.join('/'));
  } else {
    res.redirect(referer);
  }
});
