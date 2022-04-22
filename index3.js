var app = new function() {
    this.el = document.getElementById('lessons');
    this.lessons = [];

    //displays all items in the list, technically the READ portion of CRUD//
    this.FetchAll = function() {
        var data = '';
        //display all items in list and the edit and delete buttons for each//
        if (this.lessons.length>0) {
            for(i=0; i<this.lessons.length; i++) {
                data+='<tr>';
                data+='<td>'+(i+1)+'.'+this.lessons[i]+'</td>';
                data+='<td><button onclick="app.Edit('+i+')" class="btn btn-warning">Edit</button></td>';
                data+='<td><button onclick="app.Delete('+i+')" class="btn btn-danger">Delete</button></td>';
                data+='</tr>'
            }
        };
        //reads the counter//
        this.Count(this.lessons.length);
        return this.el.innerHTML = data;
    }

    //create new item//
    this.Add = function() {
        el = document.getElementById('add-lesson');
        var lessons = el.value;
        if(lessons) {
            this.lessons.push(lessons.trim());
            this.el.value = '';
            //need to update and refresh entire list of lesson plans//
            this.FetchAll();
        }
    };

    //update item//
    this.Edit = function(item) {
        //show edit box and change value//
        var el = document.getElementById('edit-lesson');
        this.el.value = this.lessons[item];
        document.getElementById('edit-box').style.display = 'block';
        self = this;

        document.getElementById('save-edit').onsubmit = function() {
            var lessons = el.value;
            if(lessons) {
                self.lessons.splice(item, 1, lessons.trim());
                self.FetchAll();
                CloseInput();
            }
        }
    };

    //delete item//
    this.Delete = function(item) {
        this.lessons.splice(item, 1);
        this.FetchAll();
    };

    //counter, helps keep track of how many items are in the list//
    this.Count = function(data) {
        var el = document.getElementById('counter');
        var name = 'lessons';
        if(data) {
            if(data == 1) {
                name = 'Lesson';
            }
            el.innerHTML = data+' '+name;
        }
        else {
            el.innerHTML = 'No '+name;
        }
    };
}

//makes sure list always updates//
app.FetchAll();

//closes edit box//
function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';
}