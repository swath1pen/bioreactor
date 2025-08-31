# This is an example repo for BioEchemBuilds
### NIH 3D Print Database - Deposit Your Build
https://3d.nih.gov/<build>
### NIH 3D Print Database - Deposit Your Protocols
[protocols.io ](https://www.protocols.io/)
### Three.js/editor - Render 3D files and scenes for your build.
https://threejs.org/editor/ 

####################### Deploy your BioEchemBuilds Web Page ########################
## To Add Your Build Clone this Repo in Visual Studio Code

1. **Replace files in /main with your CAD .pdf file and Part List .xlsx files.**

2. **Replace files in /public with your build .stl file and .gltf scene named 'scene1.gltf' .**

3. **Three.js/editor can covert to .gltf files.**

4. **Change content links for your build in main/src/components/section/Home.jsx**
   - Edit content for title and description lines: 44 and 47.
   - Edit links on lines: 12, 62, 70, 84, 100, 106, 113, 119.
     
5. **Change links for your build in main/src/components/section/Usage.jsx**
   - Edit link to NIH 3D deposit on line 8.
   - Edit protocol links and names lines 14-27.
   - Edit profile links lines 92-113.
  
6. **Change links for your build in main/src/components/section/Custom.jsx**
   - Edit content on lines 17,19,39 and 51,53,76.
   - Edit protocol links and names lines 36 and 73.
     
7. **Change build name in main/vite.config.js**
   - Edit line 8.

8. **Change github page name name in main/package.json**
   - Edit line 3.
   - 
9. **Change github page name name in main/index.html**
   - Edit line 13. 

10. **Make new public Github repository with build name and add all edited repo files.**

11. **Deploy**


## License

This project is open source and available under the [MIT License](LICENSE).

---

Happy experimenting!
