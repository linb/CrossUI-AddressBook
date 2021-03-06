xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div17")
                .setDock("fill")
                .setLeft("11.666666666666666em")
                .setTop("13.333333333333334em")
                .setWidth("25em")
                .setHeight("31.666666666666668em")
                .setOverflow("hidden")
                .setPanelBgClr("#FFFFFF")
            );
            
            host.xui_ui_div17.append(
                xui.create("xui.UI.Gallery")
                .setHost(host,"xui_ui_gallery3")
                .setDirtyMark(false)
                .setItems([
                    {
                        "id":"a",
                        "caption":"",
                        "imageClass":"xui-icon-bullet"
                    },
                    {
                        "id":"b",
                        "caption":"",
                        "imageClass":"xui-uicmd-opt"
                    }
                ])
                .setDock("bottom")
                .setShowEffects("Blur")
                .setWidth("auto")
                .setHeight("auto")
                .setIconFontSize("2em")
                .setItemMargin(0)
                .setItemPadding(8)
                .setColumns(2)
                .setValue("a")
                .onItemSelected([
                    {
                        "desc":"page1",
                        "type":"page",
                        "target":"App.Address",
                        "params":[
                            "{page.xui_ui_div17}"
                        ],
                        "method":"show",
                        "conditions":[
                            {
                                "left":"{args[1].id}",
                                "symbol":"=",
                                "right":"a"
                            }
                        ]
                    },
                    {
                        "desc":"page12",
                        "type":"page",
                        "target":"App.Setting",
                        "params":[ ],
                        "method":"hide",
                        "conditions":[
                            {
                                "left":"{args[1].id}",
                                "symbol":"=",
                                "right":"a"
                            }
                        ]
                    },
                    {
                        "desc":"page2",
                        "type":"page",
                        "target":"App.Address",
                        "params":[ ],
                        "method":"hide",
                        "conditions":[
                            {
                                "left":"{args[1].id}",
                                "symbol":"=",
                                "right":"b"
                            }
                        ]
                    },
                    {
                        "desc":"page22",
                        "type":"page",
                        "target":"App.Setting",
                        "params":[
                            "{page.xui_ui_div17}"
                        ],
                        "method":"show",
                        "conditions":[
                            {
                                "left":"{args[1].id}",
                                "symbol":"=",
                                "right":"b"
                            }
                        ]
                    }
                ])
                .setCustomStyle({
                    "ITEMS":{
                        "border-right":"0",
                        "border-bottom":"0",
                        "border-left":"0"
                    },
                    "ITEM":{
                        "border-radius":"0"
                    }
                })
            );
            
            host.xui_ui_div17.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton3")
                .setLeft("8.75em")
                .setTop("5.625em")
                .setCaption("Native Button")
                .onClick([
                    {
                        "desc":"Action 1",
                        "type":"module",
                        "target":"module_githubapisimple391",
                        "args":[
                            "{page.module_githubapisimple391.ensureGithubAuth}"
                        ],
                        "method":"$Functions.ensureGithubAuth",
                        "redirection":"other:callback:call",
                        "event":1
                    }
                ])
            );
            
            append(
                xui.create("Module.GitHubAPISimple39", "xui.Module")
                .setHost(host,"module_githubapisimple391")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        events:{
            "onRender":[{
                "desc":"load page 1",
                "type":"page",
                "target":"App.Address",
                "method":"show",
                "args":["{page.xui_ui_div17}"]
            }]
        }
    }
});