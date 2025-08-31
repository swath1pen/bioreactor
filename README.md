# This is an example build repo for BioEchem⚡Builds Databse

### NIH 3D Print Database - Deposit Your Build
https://3d.nih.gov/<build>
### Protocols.io - Deposit Your Protocols
[protocols.io ](https://www.protocols.io/)
### Three.js Editor - Render 3D files and scenes for your build.
https://threejs.org/editor/ 


## To create your own build web page, clone this Repo in Visual Studio Code with the build name.

## Build Web Page Structure
```
build/
├── public/
│   └── build.stl
│   └── scene1.gltf
├── logos/
│   ...
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── LoadingScreen.jsx
│   │   └── sections/
│   │       ├── Home.jsx #Title, description, rotating .stl model
│   │       ├── Usage.jsx #Author info, link to profiles, protocols
│   │       ├── Custom.jsx #Additional links to papers and protocols
│   │       └── Model.jsx #.gltf 3D Scene of Model
│   ├── index.css          
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
├── build_CAD.pdf
├── build_partlist.xlsx
├── index.html
└── README.md
```
1. **Replace file in /main with your CAD .pdf file named <build>_CAD.pdf**

3. **Replace file in /main with your Part List .xlsx file named <build>_partlist.pdf**

5. **Replace .stl files in /public with your <build>.stl file.**
2. **Replace file in /main with your Part List .xlsx file named <build>_partlist.pdf**

6. **Three.js/editor can covert to .gltf files. Replace .gltf scene in /public with your scene named 'scene1.gltf'**
3. **Replace .stl files in /public with your <build>.stl file.**

4. **Replace .gltf scene in /public with your scene named 'scene1.gltf'**

7. **Change content links for your build in main/src/components/section/Home.jsx**
5. **Change content links for your build in main/src/components/section/Home.jsx**
   - Edit githubUser line 8 and repoName (build name) line 9.
   - Edit content for title and description lines: 44 and 47.
   - Edit links on lines: 12, 62, 70, 84, 100, 106, 113, 119.

8. **Change links for your build in main/src/components/section/Usage.jsx**
   - Edit link to NIH 3D deposit on line 8.
   - Edit protocol links and names lines 14-27.
   - Edit profile links lines 92-113.

9. **Change links for your build in main/src/components/section/Custom.jsx**
6. **Change links for your build in main/src/components/section/Usage.jsx**
   - Edit githubUser line 4 and repoName (build name) line 5.
   - Edit link to NIH 3D deposit on line 12.
   - Edit associated protocol links and names lines 18-31.
   - Edit author profile links line 108-132.

7. **Change links for your build in main/src/components/section/Custom.jsx**
   - Edit content on lines 17,19,39 and 51,53,76.
   - Edit protocol links and names lines 36 and 73.

10. **Change build name in main/vite.config.js**
8. **Change build name in main/vite.config.js**
   - Edit line 8.

11. **Change github page name name in main/package.json**
9. **Change github page name to build name in main/package.json**
   - Edit line 3.
     
11. **Change github page name name in main/index.html**
   - 
10. **Change github page name name in main/index.html**
   - Edit line 13. 

11. **Make new public Github repository with build name and add all edited repo files.**

12. **Deploy**
Ready to Deploy with GitHubPage.

1. **Install dependencies:**

      ```bash
   npm install gh-pages
   ```

   ```bash
   npm install
   ```

3. **Check build on local server**

   ```bash
   npm run dev
   ``

4. ## Deploy


```bash
npm run deploy
```

Your build should now be available on a webpage at https://${githubUser}.github.io/${repoName}

## License

This project is open source and available under the [MIT License](LICENSE).
---

Happy building/coding/experimenting!
