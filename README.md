![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

# HRnet
Welcome to HRnet! This is our company's internal application to create and view employee records.

## **_Presentation_**
The old app uses jQuery on the front end, which leads to massive bugs and increased internal complaints.
Management leaves the technology department to update HRnet and convert it to React.

The biggest issues for HRnet users right now are date pickers, modal windows, drop-down menus and tables.
So we want to create our own React components instead of those third-party jQuery plugins that are used in the UI. 
Because all those network calls and DOM manipulation needed for jQuery plugins add up and slow things down.
And it is hoped that converting these jQuery plugins into React components will improve performance and stability.

## **_The summary of the main tasks_**
1. Convert the entire HRNet project to React.
2. Convert one of the four current jQuery plugins to React. 
  Replace the 3 remaining jQuery plugins with React components that you will code yourself, or that you can import from existing libraries if you are short of time.
3. Perform Lighthouse benchmarks comparing the old and new app.

## **_Key information for each task_**
Here is the [current HRnet repo](https://github.com/OpenClassrooms-Student-Center/P12_Front-end).
* **Conversion of the HRNet project**  

  The entire HRNet application must be converted to React:
  1. make a new version of the "Create Employee" and "Employee List" pages with React.
  2. add a state management system (the current version uses local storage).
  3. make sure everything is consistent in terms of style (For this, it is not obliged to redo the design of the application).
  4. test React code with a unit test suite if there is enough time. Otherwise, only manual testing is necessary.
  
 * **Plugin conversion**
  
    For plugins, feel free to check out the Issues tab for more context on issues users are having with existing jQuery plugins:
    1. [issue on date pickers](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/1)
    2. [issues on modal windows](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/3)
    3. [issue on drop-down menus](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/4)
    4. [issue on tables](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/2) 
  
    Here is the list of currently used jQuery plugins that need to be converted:
    1. [Date picker plugin](https://github.com/xdan/datetimepicker)
    2. [Modal window plugin - jQuery.modal.js](https://github.com/kylefox/jquery-modal)
    3. [Drop-down menus](https://github.com/jquery/jquery-ui/blob/main/ui/widgets/selectmenu.js)
    4. [Plugin for data tables](https://github.com/DataTables/DataTables)
    
    Also, when converting a jQuery plugin to a React component, keep in mind to only convert code that deals with the actual UI functionality of the plugin.
  
 * **Performance testing**
 
    We also want to measure quantifiable data (e.g. page load times, network calls) to ensure that converting the app to React actually improves performance. 
    
    For this, it is important to do Lighthouse performance audits well. 
    
    To compare, do one for the current jQuery HRnet application, then another once the application and the chosen jQuery plugin are converted to React.
    
  Once the HRnet application in React is working, we need to publish the React component on npm as a package and share the link so that we can use it if necessary.
  
## **_Install the app_**
1. Fork and clone [this repository](https://github.com/VSABernard/P14-HRnet.git). 
2. Install all dependencies
3. Start the frontend
>>* Access the project directory: <br> 
>>**_cd p14-HRnet_**
>>* Launch : 
>>**_npm start_**
>>* The frontend will be launched in
>>**_http://localhost:3000/_**
