// eslint.config.mjs
import antfu from '@antfu/eslint-config';

export default antfu({
  react: true,
  typescript: true,
}, { rules: {
  'style/semi': ['warn', 'always'],
},
});
