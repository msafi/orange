module.exports = {
  name: "Master",

  on: {
    push: {
      branches: ["master"],
    },
    pull_request: {
      branches: ["master"],
    },
  },

  jobs: {
    check: {
      name: "Check",
      strategy: {
        "fail-fast": false,
        matrix: [
          "npm run check:lint",
          "npm run check:typescript",
          "npm run check:coverage",
          "npm run check:npm-audit",
          "npm run check:depcheck",
        ],
      },
      "runs-on": "ubuntu-latest",
      steps: [
        {
          name: "Checkout repo",
          uses: "actions/checkout@v2",
        },
        {
          name: "${{ matrix.command }}",
          uses: "./.github/action",
          with: {
            command: "${{ matrix.command }}",
          },
        },
      ],
    },

    "build-packages": {
      if: false,
      name: "Build packages",
      needs: "check",
      "runs-on": "ubuntu-latest",
      steps: [
        {
          name: "Checkout repo",
          uses: "actions/checkout@v2",
        },
        {
          name: "Build for macOS",
          uses: "./.github/action",
          with: {
            task: "build-packages",
          },
        },
      ],
    },
  },
};
