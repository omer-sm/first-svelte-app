<script>
    import { bounties } from "$lib/bounties.js";
    import BountyItem from "$lib/components/index/BountyItem.svelte";

    let filterOpenBounties = $state(false);    
</script>

<div class="container mt-4">
    <!-- Jumbotron -->
    <div class="p-5 text-center bg-dark text-white rounded-3 shadow-lg">
        <h1 class="display-4 fw-bold">Intergalactic Bounty Board</h1>
        <p class="lead">
            The galaxy’s most dangerous and rewarding missions await.
        </p>
        <hr class="my-4 border-light" />
        <p>Are you skilled enough to take on these high-stakes contracts?</p>
        <a class="btn btn-primary btn-lg mx-1" href="#bounties">View Bounties</a>
        <a class="btn btn-primary btn-lg mx-1" href="/new-bounty">Post a Bounty</a>
    </div>

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
