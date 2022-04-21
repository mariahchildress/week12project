var app = new function() {
    this.el = getElementById('lessons')
    this.lessons=[]

    this.fetchAll = function() {
        var data='';

        if (this.lessons.length > 0) {
            for(i = 0; i < this.lessons.length; i++) {
                data+='<tr>';
                data+='<td>' + (i + 1)+'. '+ this.lessons[i] + '</td>';
                data+='<td><button onclick="app.Edit('+i+')" class="btn btn-warning">Edit</button></td> '; 
                data+='<td><button onclick="app.Delete('+i+')" class="btn btn-danger">Delete</button></td> ';
                data+='</tr>'
            }
        }
        this.Count(this.lessons.length);
        return this.el.innerHTML = data
    };

    this.Add = function() {
        el = document.getElementById('add-lesson');
        var lesson = el.value;
        if(lesson) {
            this.lessons.push(lesson.trim());
            el.value = '';
            this.fetchAll();
        }
    };

    this.Edit = function(item) {
        el = document.getElementById('edit-lessons');
        el.value = this.lessons[item]
        document.getElementById('edit-box').style.display = 'block';
        self=this;

        document.getElementById('save-edit').onsubmit = function () {
            var lessons = el.value;
            if(lesson) {
                self.lessons.splice(item, 1, lesson.trim());
                self.fetchAll();
                CloseInput();
            }
        }
    };

    this.Delete = function(item) {
        this.lessons.splice(item, 1);
        this.fetchAll();
    };

    this.Count = function(data) {
        var el = document.getElementById(counter);
        var name = 'Lessons';
        if (data) {
            if (data ==1) {
                name = 'Lesson';
            }
            el.innerHTML = data+' '+ name;
        }
        else {
            el.innerHTML = 'No '+ name; 
        }
    };


}

app.fetchAll();

function CloseInput(){
    document.getElementById('edit-box').style.display = 'none';
}