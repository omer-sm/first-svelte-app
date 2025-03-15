<script lang="ts">
    import { bounties } from "$lib/bounties";
    import Header from "$lib/components/shared/Header.svelte";
    import type { Bounty } from "$lib/utils/types";
    
    let title = "";
    let reward = "";
    let location = "";
    let dangerLevel = "Low";

    function submitBounty() {
        bounties.push({
            title,
            reward: `${reward} credits`,
            location,
            dangerLevel,
            postedBy: 'Anonymous',
            status: 'Open'
        } as Bounty)
        
        window.location.replace('/');
    }
</script>

<div class="container mt-4">
    <Header
        title="Post a Bounty"
        subtitle="Enlist the help of the people."
        additionalText="No matter the distance, we will get it done."
    />

    <div class="card shadow-lg">
        <div class="card-body">
            <h2 class="card-title">Bounty Details</h2>
            <form on:submit|preventDefault={submitBounty}>
                <!-- Title -->
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" id="title" class="form-control" bind:value={title} required />
                </div>

                <!-- Reward -->
                <div class="mb-3">
                    <label for="reward" class="form-label">Reward (Credits)</label>
                    <input type="number" id="reward" class="form-control" bind:value={reward} required />
                </div>

                <!-- Location -->
                <div class="mb-3">
                    <label for="location" class="form-label">Location</label>
                    <input type="text" id="location" class="form-control" bind:value={location} required />
                </div>

                <!-- Danger Level -->
                <div class="mb-3">
                    <label for="danger_level" class="form-label">Danger Level</label>
                    <select id="danger_level" class="form-select" bind:value={dangerLevel}>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                        <option>Very High</option>
                    </select>
                </div>

                <!-- Submit Button -->
                <button type="submit" class="btn btn-primary w-25">Post Bounty</button>
            </form>
        </div>
    </div>
</div>
