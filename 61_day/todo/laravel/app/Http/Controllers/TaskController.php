<?php

namespace App\Http\Controllers;

use App\Models\Tasks;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class TaskController extends Controller
{

    public function show()
    {
        $tasks = Tasks::all();

        return view('index')->with('tasks', $tasks);
    }


    public function add(Request $request)
    {

        $action = $request->input('action');
        $id = $request->input('id');
        $updatedtask = $this->show();



        $taskadd = false;
        $taskdel = false;
        $taskupdated = false;


        if ($action == 'add') {
            $todo = $request->input('todo');
            $validator = Validator::make($request->all(), [
                'todo' => 'required'
            ]);
            if ($validator->fails()) {
                return redirect('/')->withErrors($validator);
            }

            $todos = new Tasks;
            $todos->title = $todo;
            $todos->save();


            $taskadd = true;
            return $this->show('todos', $todos)->with('taskadd', $taskadd);
        }

        if ($action == 'delete') {

            Tasks::where('id', '=', $id)->delete();

            $taskdel = true;
            return $this->show('updatedtask', $updatedtask)->with('taskdel', $taskdel);
        }


        if ($action == 'update') {


            $user = Tasks::findOrFail($id);
            $user->checked = $request->input('chekTask');
            $user->save();

            $taskupdated = true;
            return $this->show('updatedtask', $updatedtask)->with('taskupdated', $taskupdated);
        }
    }
}
