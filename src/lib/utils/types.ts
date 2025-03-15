export interface Bounty {
    id: string;
    title: string;
    reward: string;
    location: string;
    dangerLevel: "Low" | "Medium" | "High" | "Very High";
    postedBy: string;
    status: "Open" | "In Progress" | "Closed";
}