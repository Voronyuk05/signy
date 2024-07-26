'use client'
import { ContactsInfo } from '../../../components/ui/contactsInfo/contactsInfo';
import { ContactsForm } from '../../../components/ui/contactsForm/contactsForm';


export default function Contacts({children}: {children: React.ReactNode}) {
    return (
        <>
            <ContactsInfo/>
            <ContactsForm/>
            {children}
        </>
    )
}