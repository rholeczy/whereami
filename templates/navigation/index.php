<ul class="app-navigation">
	<li class="app-navigation-entry"><span class="navmarg"></span><b>Where am I V 0.0.22</b></li>
	<li class="app-navigation-entry">
		<ul class="app-navigation">
			<li class="app-navigation-entry"><span class="navmarg icon-contacts-dark"></span><a class="a-entry" href="<?php echo ($_['url']['index']); ?>"><?php p($l->t('Employees')); ?></a>
				<div class="app-navigation-entry-utils"></div>
			</li>
			<li class="app-navigation-entry"><span class="navmarg icon-contacts-dark"></span><a href="<?php echo ($_['url']['locations']); ?>"><?php p($l->t('Locations')); ?></a>
				<div class="app-navigation-entry-utils"></div>
			</li>
			<li class="app-navigation-entry"><span class="navmarg icon-contacts-dark"></span><a href="<?php echo ($_['url']['lastSeen']); ?>"><?php p($l->t('Last Seen')); ?></a>
				<div class="app-navigation-entry-utils"></div>
			</li>
			<li class="app-navigation-entry"><span class="navmarg icon-contacts-dark"></span><a href="<?php echo ($_['url']['hr']); ?>"><?php p($l->t('Summary')); ?></a>
				<div class="app-navigation-entry-utils"></div>
			</li>
			<li class="app-navigation-entry"><span class="navmarg icon-template-add"></span><a href="<?php echo ($_['url']['quotes']); ?>"><?php p($l->t('Quotes')); ?></a>
				<div class="app-navigation-entry-utils"></div>
			</li>
		</ul>
	</li>
</ul>