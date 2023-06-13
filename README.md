yarn

<!-- Install husky command  -->
yarn add husky --dev
yarn husky install
yarn husky add .husky/pre-commit "yarn lint-staged"