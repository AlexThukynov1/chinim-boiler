import * as Yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const BasicFormSchema = Yup.object().shape({
    userName: Yup.string()
    .min(3, "Мінімальна кількість символів - 3")
    .max(20, "Забагато символів для імені")
    .required("Ввведіть коректно ім'я"),
    phone: Yup.string()
    .matches(phoneRegExp, 'Номер вказано невірно')
    .min(7,'Щось пішло не так, номер закороткий')
    .max(12,'Номер задовгий')
    .required("Ввведіть коректно номер телефона"),
    location: Yup.string()
    .min(3, "Занадто коротка назва")
    .max(30, "Забагато символів")
    .required("Щось пішло не так"),
    description: Yup.string()
    .min(3, "Занадто коротко")
    .max(250, "Забагато символів")
    .required("Щось пішло не так"),
});

export default BasicFormSchema;