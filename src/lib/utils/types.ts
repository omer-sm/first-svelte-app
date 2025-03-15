export interface Bounty {
    id: string;
    title: string;
    reward: string;
    location: string;
    danger_level: "Low" | "Medium" | "High" | "Very High";
    posted_by: string;
    status: "Open" | "In Progress" | "Closed";
}