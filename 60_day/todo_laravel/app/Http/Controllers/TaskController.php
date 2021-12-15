<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class TaskController extends Controller
{
    public function show()
    {
        $tasks = DB::table('tasks')->get();

        return view('index', ['tasks' => $tasks]);

    }




    public function add(Request $request)
    {
        $taskadd = false;
        if (!empty($request->isMethod('post'))) {
            $todo = $request->input('todo');
            $validator = Validator::make($request->all(), [
                'todo' => 'required'
            ]);
            if ($validator->fails()) {
                return redirect('/')->withErrors($validator);
            } else {
                DB::table('tasks')->insert(
                    [
                        'title' => $todo,
                    ]
                );
                $taskadd = true;
                return redirect('/')->with('taskadd', $taskadd);
            }
        }
    }





    public function delete(Request $request,$id)
    {
        $taskdel = false;
       if(!empty($request->isMethod('get'))){

        DB::table('tasks')->where('id', '=', $id)->delete();
        $taskdel = true;
        return redirect('/')->with('taskdel', $taskdel);;
       }




    }
}




// if ($_SERVER["REQUEST_METHOD"] == "GET") {
//     $id = $_GET['id'] ?? '';

//     //Удаляю задание
//     if (empty($id)) {
//     } else {
//         $stmt = $conn->prepare("DELETE FROM tasks WHERE id=?");
//         $res = $stmt->execute([$id]);

//         if ($res) {
//             $successfully = "Task deleted";
//         } else {
//             $successfully = "The task has not been completed yet";;
//         }
//     }
// }
