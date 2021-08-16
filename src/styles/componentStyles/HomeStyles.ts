import styled from 'styled-components';

export const StyledHome = styled.section`
  padding: 0 var(--rl-space);
`;
name: Deploy to Live Channel

on:
  push:
    branches:
      - master

jobs:
  build_and_preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: '12'
      - run: npm install
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: "${{ secrets.GITHUB_TOKEN }}"
          firebaseServiceAccount: "${{ secrets.FIREBASE_SERVICE_ACCOUNT_ZOMY_47A3D }}"
          expires: 30d
          projectId: zomy-47a3d
          channelId: live