<script lang="ts">
    import type { Bounty } from "$lib/utils/types";

    const {
        bounty,
        filterOpenBounties,
    }: { bounty: Bounty; filterOpenBounties: boolean } = $props();

    const DANGER_COLORS = {
        Low: "success",
        Medium: "info",
        High: "warning",
        "Very High": "danger",
    };
    const STATUS_COLORS = {
        Open: "success",
        "In Progress": "warning",
        Closed: "danger",
    };
</script>

{#if !filterOpenBounties || (filterOpenBounties && bounty.status === "Open")}
    <li class="list-group-item m-1 card">
        <div class="d-flex justify-content-between align-items-start pe-2 pt-1">
            <h3>{bounty.title}</h3>
            <span class="badge bg-{DANGER_COLORS[bounty.dangerLevel]}">
                Danger level: {bounty.dangerLevel}</span
            >
        </div>
        <h6 class="text-secondary">{bounty.postedBy}</h6>
        <p>
            Status: <span class="text-{STATUS_COLORS[bounty.status]} fw-bold"
                >{bounty.status}</span
            >
        </p>
        <hr />

        <p>
            Location: <span class="text-info fw-bold">{bounty.location}</span>
        </p>
        <p>Reward: <span class="text-warning fw-bold">{bounty.reward}</span></p>
    </li>
{/if}
