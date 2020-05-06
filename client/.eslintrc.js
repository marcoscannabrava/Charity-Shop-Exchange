module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["react", "prettier"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};