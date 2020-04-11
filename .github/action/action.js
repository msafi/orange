!function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=11)}([function(e,t){e.exports=require("@actions/core")},function(e,t){e.exports=require("@actions/github")},function(e,t){e.exports=require("fs-extra")},function(e,t){e.exports=require("@actions/artifact")},function(e,t){e.exports=require("bluebird")},function(e,t){e.exports=require("electron-packager")},function(e,t){e.exports=require("archiver")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("electron-winstaller")},function(e,t){e.exports=require("@actions/exec")},function(e){e.exports=JSON.parse('{"name":"orange","productName":"Orange","version":"0.0.0-see-the-releases-page-on-github","description":"Bitcoin blockchain explorer for Bitcoin Core","license":"Unlicense","main":"main/main.js","engines":{"node":"^12.0.0","npm":"^6.0.0"},"scripts":{"build:prod:main":"cross-env NODE_ENV=production npm run _webpack-build-main","build:prod:renderer":"cross-env NODE_ENV=production npm run _webpack-build-renderer","build":"run-s _rimraf-artifacts _build","build-action":"cross-env NODE_ENV=production webpack --config webpack/webpack.action.config.js","generate-workflows":"node .github/generateWorkflows/generateWorkflows.js","check:coverage":"npm run _test-with-coverage","check:lint":"eslint \'**/*.{ts,tsx,js}\'","check:npm-audit":"npm audit","check:typescript":"npm run _typescript","check:depcheck":"depcheck","check":"run-p --aggregate-output -cln check:*","create-package":"node scripts/createPackage.js","develop:main":"run-s _webpack-build-main _electron","develop:renderer":"cross-env NODE_ENV=development run-p -ln _webpack-server \'_typescript -- -w\'","trigger-release":"node scripts/triggerRelease.js","see-coverage":"run-s \'_test-with-coverage -- --coverageThreshold={}\' _open-coverage-results","test":"jest","_build":"run-p --aggregate-output -cln build:*:*","_electron":"electron ./artifacts/webpack/main/main.js","_open-coverage-results":"open-cli coverage/lcov-report/index.html","_rimraf-artifacts":"rimraf artifacts","_test-with-coverage":"npm run test -- --coverage","_typescript":"tsc --noEmit","_webpack-build-main":"webpack --config webpack/webpack.main.config.js","_webpack-build-renderer":"webpack --config webpack/webpack.renderer.config.js","_webpack-server":"webpack-dev-server --config webpack/webpack.renderer.dev.config.js"},"devDependencies":{"@actions/artifact":"^0.3.0","@actions/core":"^1.2.3","@actions/exec":"^1.0.3","@actions/github":"^2.1.1","@babel/core":"^7.8.3","@babel/plugin-proposal-class-properties":"^7.8.3","@babel/plugin-proposal-nullish-coalescing-operator":"^7.8.3","@babel/plugin-proposal-optional-chaining":"^7.8.3","@babel/preset-env":"^7.8.3","@babel/preset-react":"^7.8.3","@babel/preset-typescript":"^7.8.3","@hot-loader/react-dom":"^16.11.0","@material-ui/core":"^4.9.0","@material-ui/icons":"^4.5.1","@testing-library/jest-dom":"^5.1.1","@testing-library/react":"^9.4.0","@types/archiver":"^3.1.0","@types/bluebird":"^3.5.29","@types/electron-devtools-installer":"^2.2.0","@types/jest":"^25.1.1","@types/lodash":"^4.14.149","@types/react":"^16.9.19","@types/react-dom":"^16.9.5","@types/react-redux":"^7.1.7","@types/react-router-dom":"^5.1.3","@types/react-virtualized-auto-sizer":"^1.0.0","@types/react-window":"^1.8.1","@types/testing-library__jest-dom":"^5.0.1","@typescript-eslint/eslint-plugin":"^2.18.0","@typescript-eslint/parser":"^2.18.0","archiver":"^3.1.1","babel-loader":"^8.0.6","babel-plugin-lodash":"^3.3.4","babel-plugin-transform-es2015-modules-commonjs":"^6.26.2","copy-webpack-plugin":"^5.1.1","cross-env":"^7.0.2","css-loader":"^3.4.2","depcheck":"^0.9.2","electron-devtools-installer":"^2.2.4","electron-packager":"^14.2.1","electron-winstaller":"^4.0.0","eslint":"^6.8.0","eslint-config-airbnb":"^18.0.1","eslint-config-prettier":"^6.9.0","eslint-import-resolver-typescript":"^2.0.0","eslint-plugin-import":"^2.20.0","eslint-plugin-jest":"^23.6.0","eslint-plugin-jsx-a11y":"^6.2.3","eslint-plugin-react":"^7.18.0","eslint-plugin-react-hooks":"^1.7.0","file-loader":"^5.0.2","fs-extra":"^9.0.0","html-webpack-plugin":"^3.2.0","husky":"^3.1.0","jest":"^25.1.0","js-yaml":"^3.13.1","lint-staged":"^9.5.0","memfs":"^3.0.5","nock":"^11.8.2","npm-run-all":"^4.1.5","open-cli":"^5.0.0","prettier":"1.19.1","react-hot-loader":"^4.12.19","shelljs":"^0.8.3","source-map-loader":"^0.2.4","style-loader":"^1.1.3","ts-jest":"^25.2.0","tsconfig-paths-webpack-plugin":"^3.2.0","typeface-roboto":"0.0.75","typescript":"^3.7.5","webpack":"^4.41.5","webpack-cli":"^3.3.10","webpack-dev-server":"^3.10.1","webpack-merge":"^4.2.2","webpack-node-externals":"^1.7.2"},"dependencies":{"bluebird":"^3.7.2","clsx":"^1.0.4","electron":"^6.1.7","lodash":"^4.17.15","moment":"^2.24.0","react":"^16.12.0","react-dom":"^16.12.0","react-redux":"^7.1.3","react-router-dom":"^5.1.2","react-virtualized-auto-sizer":"^1.0.2","react-window":"^1.8.5","redux":"^4.0.5","redux-thunk":"^2.3.0","typesafe-actions":"^5.1.0"},"husky":{"hooks":{"pre-commit":"lint-staged"}},"lint-staged":{"*.{ts,tsx,js,json,md}":["prettier --write","git add"]}}')},function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(4),o=r(3),c=r(2),i=r.n(c),s=r(5),l=r(6),p=r(7),u=r(8),d=r(1),g=r(9);const b=async(e,t)=>{await Object(g.exec)(e,null,{ignoreReturnCode:!0})>0&&a.setFailed(t)},f=/^([0-9]|[1-9][0-9]*)\.([0-9]|[1-9][0-9]*)\.([0-9]|[1-9][0-9]*)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+)?$/,m=()=>{const e=(()=>{const e=d.context.ref;return e.substr("refs/tags/".length,e.length)})();return t=e,f.test(t)?e:`0.0.0-build.${d.context.sha.substr(0,7)}`;var t};var w=r(10);const k=o.create(),h=m(),{productName:v}=w,y={"macos-latest":{electronPackagerPlatform:"darwin",archiveName:`${v}-v${h}-macOS.zip`},"ubuntu-latest":{electronPackagerPlatform:"linux",archiveName:`${v}-v${h}-Linux.zip`},"windows-latest":{electronPackagerPlatform:"win32",archiveName:`${v}-v${h}-Windows.exe`}};n.try(async()=>{const e=a.getInput("command");if(e)return await b(e,`\`${e}\` failed!`);const t=a.getInput("task");return"create-executable"===t?await(async()=>{console.log("Building source code..."),await b("npm run build","`npm run build` failed");const e=a.getInput("os",{required:!0}),{archiveName:t,electronPackagerPlatform:r}=y[e];console.log(`Creating Electron package on ${e}...`),await s({arch:"x64",dir:"artifacts/webpack",out:"artifacts/electronPackager",icon:"src/assets/orange",overwrite:!0,platform:r,prune:!1,appVersion:m()}),"macos-latest"===e?(console.log("Compressing Electron package..."),await new Promise(n=>{const o=l("zip",{zlib:{level:9}}),c=i.a.createWriteStream(`artifacts/electronPackager/${t}`);o.pipe(c),o.directory(`artifacts/electronPackager/${v}-${r}-x64/`,!1),c.on("close",n),o.on("error",t=>{console.error(t),a.setFailed(`Could not create a zip archive on ${e}`)}),o.finalize()})):"windows-latest"===e&&(console.log(`Creating ${t}...`),await u.createWindowsInstaller({appDirectory:`artifacts/electronPackager/${v}-${r}-x64`,outputDirectory:"artifacts/electronPackager",authors:"https://github.com/orange-org",exe:`${v}.exe`,setupExe:t,version:h,name:v,title:v,iconUrl:"https://raw.githubusercontent.com/msafi/orange/55d3cebd112e8e5ea0cf3a3ecf2bb6aa824ba3c4/src/assets/orange.ico",setupIcon:"src/assets/orange.ico"})),console.log(`Uploading ${t}...`),await k.uploadArtifact(Object(p.basename)(t),[`artifacts/electronPackager/${t}`],"artifacts/electronPackager")})():"draft-release"===t?await(async()=>{try{const e=new d.GitHub(a.getInput("githubToken")),{owner:t,repo:r}=d.context.repo,n=m();console.log("Creating GitHub release...");const c=await e.repos.createRelease({owner:t,repo:r,tag_name:n,name:`Orange v${n}`,draft:!0}),{data:{upload_url:s}}=c,l=o.create();console.log("Downloading build artifacts...");const p=await l.downloadAllArtifacts();for(let t of p){const{downloadPath:r,artifactName:a}=t,n=`${r}/${a}`;console.log(`Uploading release asset ${a}...`),await e.repos.uploadReleaseAsset({url:s,headers:{"content-type":"application/zip","content-length":i.a.statSync(n).size},name:a,file:i.a.readFileSync(n)})}}catch(e){a.setFailed(e.message)}})():void 0}).catch(e=>a.setFailed(e.toString()))}]);