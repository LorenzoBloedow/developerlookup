import { Metadata } from "next";
import Profile from "../../../components/profile/Profile";

export const revalidate = 60;

interface GenerateMetadataProps {
    params: {
        username: string
    }
}

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
    return {
        title: params.username + " | DeveloperLookup"
    }
}

interface PageProps {
    params: {
        username?: string
    }
}

const Page = ({ params }: PageProps) => {
    if (typeof params?.username === "string") {
        return (
            <main>
                <Profile username={params.username} /> 
            </main>
        );
    }
}

export default Page;