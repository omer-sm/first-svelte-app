<script>
    import { bounties } from "$lib/bounties.js";
    import BountyItem from "$lib/components/index/BountyItem.svelte";
    import Header from "$lib/components/shared/Header.svelte";

    let filterOpenBounties = $state(false);    
</script>

<div class="container mt-4">
    <!-- Jumbotron -->
     <Header
        title="Intergalactic Bounty Board"
        subtitle="The galaxy’s most dangerous and rewarding missions await."
        additionalText="Are you skilled enough to take on these high-stakes contracts?"
    />

    <!-- Bounty list -->
    <div class="card flex-row justify-content-center">
        <input id="open-filter-checkbox" type="checkbox" bind:checked={filterOpenBounties} />
        <label class="m-2 fw-bold" for="open-filter-checkbox">Show open only</label>
    </div>
    <ul id="bounties" class="list-group">
        {#each bounties as bounty}
            <BountyItem {bounty} {filterOpenBounties} />
        {/each}
    </ul>
</div>
