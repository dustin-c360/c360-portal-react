import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models, Report, Embed, IEmbedConfiguration, service, Page } from 'powerbi-client';

/*
const embedConfig = {
    type: 'report',   // Supported types: report, dashboard, tile, visual and qna
    id: 'f6bfd646-b718-44dc-a378-b73e6b528204',
    embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=f6bfd646-b718-44dc-a378-b73e6b528204&groupId=be8908da-da25-452e-b220-163f52476cdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlfX0%3d',
    accessToken: 'H4sIAAAAAAAEAB2Wxa7FDI6E3-XfZqQwjdSLMPMJ7sLMnNa8-9zuvW2Vy6pP_vc_dvoOc1r887__HKFAazqJOGx7jQ4OCd5JH2336HHvRT0UQN0L64PJ_vhVyz66AZ02mPqg39R4WqC8ynilJ4ZsGchR9sRUh-QBkoqU-DrpOLrjo4UMUgLaFDYaBCfUaE2b7NLZ8A4-NFmrBUClKm-PoAX_Nbom0bBKcJrX97-xgy3ZR2UzAps4yPr6J7WymjrsDlYL-0jF1NvCdz7tBadN3dNdZEo_sARC4qYOIkTqvIopMzC1_s1FVuOwR-Dm6vN7jMVEIQzt0rpa4gtAZ4GxmhdyEP9d1W1mZw9EdQs48fySXrivgJBE-50f-6gIPz0vfSwib-woidk2ZOOzm7MP2cZlaNOjlbcApGcMz6thkdLRTBhQOmAGGnkB0wy1hb6Ziq_Yrs2xfOXwIyI0V3Ae9-tjR-YHmrtYHz5vWB_qwpEKnLjjthLN29_otJrI2gCvFiieuqSJqslMIK6httRteaiMWqQyISJvMvJY5kiL7N8pX5_n79BF6XfAabC4CgqzEyPJ_2wvfi67-taYOmqxDKYlRsvlTdTdlwVIncC5BwrA0SC2MYFoXpvuvI7fikySqdNgkHIhIOseG4jJoVeAJ8refYVE1w5ur8gFwYMeyVCWquIDV89e3PVx5uyXVp8G78bEMxerV3_AUr-ipVseuVJsyfz6K659fN7ILXCdE-AK35Tyo7HlCDFWT5JB7l4lyyskdcfbQjCXcq1nCpjsSdNCa9Pn7uqYm5bAZyOpdSZoX5Jmi47ZE7pvuA8LlIeyrtvByc6oMrdhy-GZhG7y0Dw2ImDbBahlzYEwbTSG6qaz-5fXv3E5np7gjAW-EV6Y0nPxF6DxPF5M0CKWEQGrGpbzskyNuY8cJZmk9g2POjriKL43sbHZArPslaKDUDWKhE5u85qRRLHfQZmXHgSF6o80GzRX6RQM7kouUK2iXz1klKzeDF2UH70OyrPS_D95hKsE6LfJyI3PfiFoK15GpDCtm_aY7sFAjAgNqR18fsp8DyabOKrsCntV_JYesRfefzFkUkYEtCmx0EhGCzR25DX7NQ3esqzuT7nbkVI2c7HBP8no1dhTF1Qzr3WExYslKnv2MQ5s87d4Hqj2t_Bea5lW6Ji9rzrLz8n7ls-AYkt43CD38fXIZsEYm500lA16hqhxzWXf0J6kYhjJjhLw8p8hGbaRQFVoQJGPZN_W74zP9bUtN7MHQUzmyilq2glNiqmNBjS3dMDDCXJM2bxP8N1WZ0gxj-oVe00iUrs-Cuq3ia4Ekkq9DAZjliXnHqN-NFGhntQi235UsoeFmYUfBEf9XKlT97f0gLtnctra44xj8xZZmnkXGJ9mtmS5AJkfw2Z77cltv2K75RoeCfMbBJs6qhUTyZ3wl7gQM8TAx69utdIrcoX5cefZkczuVpNnxgJnQbzk5dWH1fNgyYKvvV-TRipspCi-tceC922Rm3vkUi34wX7nra5r_xbOjZfwUlNuw7TR1lKdqXBvuXFF6UzkFVOBiFWk5YgI-gZtbLQ0TOEBL5l9AAuiZ2mr9_zmVYvndQUA4ZbyBAvyKpwaitKsbBe9FiN02hLDGwgaDVSw-X7tN9Uap5C6UeX1GzWHbF3nbl4W7-LPmK-59Jds1X0VoDZ8O76WbQH77emf-YV92zCwhQgCVcsR8N-Rslo_7r7ilpMIEko0fkOMjdsKDfI4DGdL304NJ-IR4vGFOVnkeeUp8jjwBI1h3HREMLptXFg3zaMUzAZ44rmLVO40_XTUfIBIHMoPuKttU6SNhtMWDplEzhwvHWdFbz19LeIbjfPg174kNnu7XBLtBQkKyi8AYhhXz5U3jjTeXw7hV6DWpS0tp2Z4xOUEow0sf4wnEnHJQRTMG7Lyv15HO3Ofq4m7parSww7qhorUH7DQYoQ_h4ThrJxe05qh_66z0BZzU3Zz6fuF7gpW0jhlOImeW-VI2-r703TGzaZwYDJob2G6bhM2JMQCXDjQDR5Y7VqhTvfQva-uYwg9jCrFUyTWmZFphFzGSePdo-uaJGaBEiYCK32tkC9fgXYNbFCFIa5sS5PFzS7HoWojNrDihI9vbszmBW42vJ6EXhScurlkdD4B9r0NiHNxxGEpuZKAp_G_EeroQxMQUe1WOiOz1DQq2MmmAjfY7fazCLcPINErT-8fXL6PqtKBhAqfZKKJ7EByjulRDrAoiBvDmsRqGbTAcfXWLTCMU1LvcKygsK4kOtplb5oR2RF17BjxlCm1Q9JPi9Cb3I_fIdw2PGPa5tuNuK1tE4tStE2UgO30GOh57IQsDeRvI-wUdABYR4FnCEql2QIMnyctTqu1KYb0pGWJMkGc-K5eX5HFhqPHEVI_MaJHj5k2x2yx_rtPY9sc76DwZF0TxyExSZc5Z8C5f_7nH257l2PWyvfvnZrv0ErwH1hIj43sLoz8-Me7mQ3hxR5RQhgyjqsz9g6PwO5cTgxiBMK8RPJNmrYKq2bEe_W35MawT1o8uHmA5b2GAGBXHJM0jVdMJxAbWpoEYKRzrRGnmBXQJ1rnmzP-fvKD--Bt4kf8gKA-ixEHXuL65TQTf70vPvwDYV0CMPvKp8FbmER_kr_OH6CiEwCWdKZwld5fUYZSXvUnzL0SEqAI_CfLPm9-WH3fbZa8l4ZOx15eZAu4R__wrhWDP9Y94huT4G9126_yIzHXJsqG3QGKhsRkNQpff9ek4KgGNrztL1B-jWNGlwdmrcVPyqxK35ILiYjdcXtf23Ciqy_HIXYIzL_-9R-b36UpNyX4cxkjg9qfotwK4Sxtcs8H4VFy_lvltfWUHudW_pWlhKYL4CMCi3gmfflI9Axsja754WP1HpVfGwAKEWeGlU3mR8fTWrDXMER2GokAm84aZR_81NMmYW7aJa-ooyWEAZfKILNFr-y6iKn7rMNVgT84jm-moV-cdmOgVbJUHYN8qQys1VBrQhRgzghJXIx7jzb_iv5PoPiq2mU5FnDrZdYf3QcBO5uuxbvwH6JKTU-x7Xw0XOKsBCOjBAyXNFtPaXD9VmZ28qGNEWJ428bVBwrrGYK1VIUrJF5jBQggSKiKFJtJpREUz8THKNo6XOiD_HZM4Bpl5379bXqJkhFUTOCk1iVBZK4lrIz3QRr60-OLCDQLHpZYErMtW_m5meGET_1n8__9PwyqnZBCDAAA.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjpmYWxzZX19',
    tokenType: models.TokenType.Embed,
    settings: {
        panes: {
            filters: {
                visible: false
            },
            pageNavigation: {
                visible: false
            }
        },
    }
}
*/

const embeddedContainerStyle = {
    height: '1000px'
}

export default class Discover extends React.Component{
    render()    {
        return (
            /*<div>
                <PowerBIEmbed
                    embedConfig = {embedConfig}
                    cssClassName = { "report-style-class" }
                    getEmbeddedComponent = { (embeddedReport) => {
                        this.report = embeddedReport;
                    }}
                />
            </div> */
            <iframe width="100%" height="750px" src="https://app.powerbi.com/reportEmbed?reportId=c09d2972-d6b3-41e7-ab34-bd12dc63c512&autoAuth=true&ctid=0231034e-888a-4837-a17f-d85b1ab159ba&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D&navContentPaneEnabled=false&pageName=ReportSection07e28cc9cc77187d616c" frameborder="0" allowFullScreen="true"></iframe>
        );
    };
};