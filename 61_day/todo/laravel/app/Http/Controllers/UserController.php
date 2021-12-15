<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;



class UserController extends Controller
{
    public function showUser()
    {
        return view('login');
    }

    public function getUser(Request $request)
    {
        $notlogin = false;
        $request->flash();
        $email = $request->input('email');
        $password = $request->input('password');

        // @task Делаем запрос в бд
        if (isset($email) && isset($password)) {
            return redirect('/');
        }
        $value = $request->session()->get('key');
        dd($value);
        $notlogin = true;
        return view('login')->with('notlogin', $notlogin);
    }

    public function showRegistr()
    {

        return view('registr');
    }

    public function addUser(Request $request)
    {

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

            if ($validator->fails()) {

                return redirect('register')->withErrors($validator);
            } else {
                // @task Делаем запрос в бд
                return view('login');
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
            $email = $request->input('email');
            // @task Делаем запрос в бд
            $view = view('forgotpassword');
            $view->with('successfully', $successfully);
            $view->with('email', $email);
            return $view;

        $notemail = true;
        return view('forgotpassword')->with('notemail', $notemail);
    }
    public function logoutUser()
    {
        return redirect('login');
    }
}
