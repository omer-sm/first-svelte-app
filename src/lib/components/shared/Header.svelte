<script lang="ts">
    const { title, subtitle, additionalText }: {
        title: string,
        subtitle: string,
        additionalText: string
    } = $props();
</script>

<div class="p-5 text-center bg-dark text-white rounded-3 shadow-lg">
    <h1 class="display-4 fw-bold">{title}</h1>
    <p class="lead">
        {subtitle}
    </p>
    <hr class="my-4 border-light" />
    <p>{additionalText}</p>
    <a class="btn btn-primary btn-lg mx-1" href="/#bounties">View Bounties</a>
    <a class="btn btn-primary btn-lg mx-1" href="/new-bounty">Post a Bounty</a>
</div>