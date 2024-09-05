   
            document.getElementById('technicalEventsTab').addEventListener('click', function() {
                document.getElementById('technicalEvents').classList.remove('hidden');
                document.getElementById('nonTechnicalEvents').classList.add('hidden');
                document.getElementById('technicalEventsTab').classList.add('btn-active');
                document.getElementById('technicalEventsTab').classList.remove('btn-inactive');
                document.getElementById('nonTechnicalEventsTab').classList.add('btn-inactive');
                document.getElementById('nonTechnicalEventsTab').classList.remove('btn-active');
            });
            
            document.getElementById('nonTechnicalEventsTab').addEventListener('click', function() {
                document.getElementById('nonTechnicalEvents').classList.remove('hidden');
                document.getElementById('technicalEvents').classList.add('hidden');
                document.getElementById('nonTechnicalEventsTab').classList.add('btn-active');
                document.getElementById('nonTechnicalEventsTab').classList.remove('btn-inactive');
                document.getElementById('technicalEventsTab').classList.add('btn-inactive');
                document.getElementById('technicalEventsTab').classList.remove('btn-active');
            });
            