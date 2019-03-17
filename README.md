# popup-markup-editor

Shows 
    element name
    element markup
    element styles
    element state
    element styleClass

Dispatches
    shows empty details on open
    shows element details on open
    
    dispatches element details on close


Planned
    Adding new element property should result in less number of code change in future.
    Iterate through properties of element, create handlers for them, create input for them, it can take validators.

    syntax

    property: {
        type: String,
        validator: function,
        required: Boolean.
    }

    Example

    element: {
        name: {
            type: String,
            validator: function(name){
                return true;
            },
            required: true
        }
    }