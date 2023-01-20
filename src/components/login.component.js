import * as React from 'react';

const LoginForm = () => {
  const [form, setForm] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(form.email + ' ' + form.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div> <div className="mb-3">
        <label htmlFor="email">Email</label>
        </div>
        <input
        className="form-control"
          id="email"
          type="text"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
      <div className="mb-3">
        <label htmlFor="email">Password</label>
        </div>
        <input
        className="form-control"
          id="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-up">sign up?</a>
        </p>
    </form>
  );
};

export default LoginForm ;