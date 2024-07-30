import postmark from 'postmark';

export const sendEmail = async (userEmail, userName) => {

    const postmarkClient = new postmark.ServerClient(process.env.POSTMARK_TOKEN);

    const templateModel = {
        name: userName,
    };

    await postmarkClient.sendEmailWithTemplate({
        From: process.env.OUR_EMAIL,
        To: userEmail,
        TemplateId: '', // template id whick postmark gives
        TemplateModel: templateModel, // template model which is saved in postmark
    });

}