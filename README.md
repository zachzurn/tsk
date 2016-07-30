# TSK (tisk)

Just starting this project. TSK will be a file based project management system that persists with the filesystem. Node JS with Electron for ui.

A Workspace is a folder that can contain any number of folders with anything in them. A settings file will live at the root of the workspace ".wsk" which holds the title of the workspace as well as any persistent settings.

Any folder inside the workspace with a .tsk or .notsk (inactive, archived project) file in it will be considered a project. Projects can have task lists and a wiki. All wiki/task content will be in markup. Projects can not have sub projects in them.

A .tsk file is a json file that holds all of the information regarding the project. This file will also hold any images used inside the project (embedded).

**Workspace data format *.wsk**

    {
        title : "",
        content : "",
        projects : [
            "relative/path/to/project/folder", "relative/path/to/project/folder"
        ]
    }

**Task data format *.tsk (active) *.notsk (inactive)**

    {
        title : "Project Title",
        content : "markup",
        tasks : [{
                    title : "", /* active,  */
                    content : "markup",
                    status : "",
                    created : "",
                    updated : "",
                    due : "",
                }],

        wiki : [
            {
                title : "",
                content : "markup"
            }
        ]

        images : {
            "id" : "IMAGE_BINARY"
        }

        fileCache : [
            { type : "folder", name : "Folder Name",note : "", items : [] }
            { type : "file", name : "File Name", note : "" }
        ]

        activity : [
            { "type" : "add", "title" : "Added note to Filename", "created" : "date" }
            { "type" : "edit", "title" : "Added note to Filename", "created" : "date" }
            { "type" : "delete", "title" : "Added note to Filename", "created" : "date" }
        ]
        
    }

**Events**

Eventually I would like to add a standalone watcher that can watch for changes and act on changes. For example, do something when a new task is added.