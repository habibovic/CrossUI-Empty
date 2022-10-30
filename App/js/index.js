// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"sabah_button")
                .setName("sabah_button")
                .setLeft("0.7619047619047619em")
                .setTop("35.80952380952381em")
                .setWidth("6.780952380952381em")
                .setZIndex(2)
                .setCaption("Sabah")
                .onContextmenu([
                    {
                        "desc" : "Action 1",
                        "type" : "control",
                        "target" : "sabah_button",
                        "args" : [ ],
                        "method" : "fireClickEvent",
                        "event" : 1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label18")
                .setLeft("19.375em")
                .setTop("1.25em")
                .setWidth("10.81904761904762em")
                .setHeight("1.980952380952381em")
                .setCaption("Ovo je testna aplikacija")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "16px",
                        "font-style" : "oblique"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image7")
                .setLeft("0em")
                .setTop("6.857142857142857em")
                .setWidth("61.714285714285715em")
                .setHeight("32.22857142857143em")
                .setSrc("https://upload.wikimedia.org/wikipedia/commons/5/55/Blaue_moschee_6minarette.jpg")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button15")
                .setName("podne_button")
                .setLeft("8.380952380952381em")
                .setTop("35.80952380952381em")
                .setWidth("6.780952380952381em")
                .setZIndex(2)
                .setCaption("Podne")
                .onContextmenu([
                    {
                        "desc" : "Action 1",
                        "type" : "control",
                        "target" : "sabah_button",
                        "args" : [ ],
                        "method" : "fireClickEvent",
                        "event" : 1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button20")
                .setName("ikindija_button")
                .setLeft("16em")
                .setTop("35.80952380952381em")
                .setWidth("6.780952380952381em")
                .setZIndex(2)
                .setCaption("Ikindija")
                .onContextmenu([
                    {
                        "desc" : "Action 1",
                        "type" : "control",
                        "target" : "sabah_button",
                        "args" : [ ],
                        "method" : "fireClickEvent",
                        "event" : 1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button21")
                .setName("aksam_button")
                .setLeft("23.61904761904762em")
                .setTop("35.80952380952381em")
                .setWidth("6.780952380952381em")
                .setZIndex(2)
                .setCaption("Aksam")
                .onContextmenu([
                    {
                        "desc" : "Action 1",
                        "type" : "control",
                        "target" : "sabah_button",
                        "args" : [ ],
                        "method" : "fireClickEvent",
                        "event" : 1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button22")
                .setName("jacija_button")
                .setLeft("31.238095238095237em")
                .setTop("35.80952380952381em")
                .setWidth("6.780952380952381em")
                .setZIndex(2)
                .setCaption("Jacija")
                .onContextmenu([
                    {
                        "desc" : "Action 1",
                        "type" : "control",
                        "target" : "sabah_button",
                        "args" : [ ],
                        "method" : "fireClickEvent",
                        "event" : 1
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});