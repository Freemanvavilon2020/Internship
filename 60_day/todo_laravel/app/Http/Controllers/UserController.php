<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function showUser()
    {
        return view('login');
    }

    public function getUser(Request $request)
    {
        $notlogin = false;
        if (!empty($request->isMethod('post'))) {
            $request->flash();
            $email = $request->input('email');
            $password = $request->input('password');

            $users = DB::table('users')
                ->select('email', 'password')
                ->where('email', '=', $email)
                ->where('password', '=', $password)
                ->get();
            foreach ($users as $user) {
                if ($user->email == $email && $user->password == $password) {
                    return redirect('/');
                }
            }
            $notlogin = true;

            return view('login')->with('notlogin', $notlogin);
        }
    }

    public function showRegistr()
    {
        return view('registr');
    }

    public function addUser(Request $request)
    {
        if (!empty($request->isMethod('post'))) {
            $request->flash();
            $name = $request->input('name');
            $email = $request->input('email');
            $password = $request->input('password');
            $validator = Validator::make($request->all(), [
                'name' => 'required|max:50',
                'email' => 'required|email',
                'password' => [
                    'required',
                    'string',
                    'min:10',             // must be at least 10 characters in length
                    'regex:/[a-z]/',      // must contain at least one lowercase letter
                    'regex:/[A-Z]/',      // must contain at least one uppercase letter
                    'regex:/[0-9]/',      // must contain at least one digit

                ],
            ]);
            //Спросить Бурца про сравнение email
            if ($validator->fails()) {

                return redirect('register')->withErrors($validator);
            } else {
                DB::table('users')->insert(
                    [
                        'name' => $name,
                        'email' => $email,
                        'password' => $password,
                    ]
                );
                return redirect('login');
            }
        }
    }

    public function showForgotpassword()
    {
        return view('forgotpassword');
    }

    public function addEmail(Request $request)
    {
        $notemail = false;
        $successfully = false;
        if (!empty($request->isMethod('post'))) {
            $email = $request->input('email');


            $query = DB::table('users')
                ->select('email')
                ->where('email', '=', $email)
                ->get();

            foreach ($query as $e) {
                if ($e->email == $email) {
                    $successfully = true;

                    $view = view('forgotpassword');
                    $view->with('successfully', $successfully);
                    $view->with('email', $e->email);
                    return $view;
                    //Реализовать логику отправки письма пользователю
                }
            }

            $notemail = true;
            return view('forgotpassword')->with('notemail', $notemail);
        }
    }

    public function logoutUser()
    {
        return redirect('login');
    }
}
