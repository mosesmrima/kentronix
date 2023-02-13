import { Formik, Form, Field, ErrorMessage } from 'formik';
import { send } from 'emailjs-com';

export default function GetQuotation() {
    return (
        <div className={"rounded-[50px] bg-blue-400  sm:w-[80vw] w-[80vw] sm:h-[63vh] h-[77vh] min-w-28 flex flex-col gap-8 justify-start items-center"}>
            <h2 className={"mb-4"}>Get Quotation</h2>
            <Formik

                initialValues={{ email: '', description: '' }}

                validate={values => {

                    const errors = {};

                    if (!values.email) {

                        errors.email = 'Required';

                    } else if (

                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)

                    ) {

                        errors.email = 'Invalid email address';

                    }
                    if (!values.description) {

                        errors.description = 'Required';

                    }
                    if (!values.name) {

                        errors.name = 'Required';

                    }

                    return errors;

                }}

                onSubmit={(values, { setSubmitting }) => {
                    send(
                        'service_thag79f',
                        'template_kz9b7rm',
                        values,
                        "i64IBbxTdKACMS4oG"
                    )
                        .then((response) => {
                            console.log('SUCCESS!', response.status, response.text);
                        })
                        .catch((err) => {
                            console.log('FAILED...', err);
                        });
                    setTimeout(() => {
                        setSubmitting(false);

                    }, 400);

                }}

            >

                {({ isSubmitting }) => (

                    <Form  className="relative z-0 w- mb-6  sm:w-[75vw] w-[75vw] sm:h-[40vh] h-[63vh] min-w-28 flex flex-col justify-center items-center  shadow-[inset_20px_20px_60px_#326fd1_inset_-20px_-20px_60px_#4496ff]">
                        <div className="relative z-0  sm:w-[20vw] w-[40vw] mb-6 group">
                            <Field type="text" name="name" id="name"
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="name"
                                   className="peer-focus:font-medium absolute text-sm text-slate-900 dark:text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>

                        <ErrorMessage name="name" component="div" className={"text-red-900"} />

                        <div className="relative z-0  sm:w-[20vw] w-[40vw] mb-6 group">
                            <Field type="email" name="email" id="email"
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="email"
                                   className="peer-focus:font-medium absolute text-sm text-slate-900 dark:text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                                address</label>
                        </div>

                        <ErrorMessage name="email" component="div" className={"text-red-900"} />

                        <div className="relative z-0  sm:w-[45vw] w-[55vw] mb-6 group">
                            <Field as={"textarea"} name="description" id="description"
                                   className="sm:h-[19vh] h-[40vh] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-2 rounded-2xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor={"description"}
                                   className="peer-focus:font-medium absolute ml-4 text-sm text-slate-900 dark:text-slate-900 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">What service do you require?</label>
                        </div>

                        <ErrorMessage name={"description"} component="div" className={"text-red-900"}/>

                        <button type="submit" disabled={isSubmitting} className={"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[20vw] sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}>

                            Submit

                        </button>

                    </Form>

                )}

            </Formik>
        </div>
    );
}